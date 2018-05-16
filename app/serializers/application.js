import ContentfulSerializer from 'ember-data-contentful/serializers/contentful';

export default ContentfulSerializer.extend({

    _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
        let documentHash = {
            meta: {},
            data: null,
            included: []
        };

        ['limit', 'skip', 'total'].forEach((meta) => {
            if ( payload && typeof payload[meta] !== 'undefined' ) {
                documentHash.meta[meta] = payload[meta];
            }
        });

        if (isSingle) {
            let {
                data,
                included
            } = this.normalize(primaryModelClass, payload);

            documentHash.data = data;
            if (included) {
                documentHash.included = included;
            }
        } else {

            let items = [];
            for (let i = 0, l = payload.items.length; i < l; i++) {
                let item = payload.items[i];
                let {
                    data,
                    included
                } = this.normalize(primaryModelClass, item);

                if (included) {
                    documentHash.included.push(...included);
                }
                items.push(data);
            }
            documentHash.data = items;

            if (payload.includes) {

                let entries = [];
                let assets = [];

                if (payload.includes.Entry) {
                    for (let i = 0, l = payload.includes.Entry.length; i < l; i++) {
                        let item = payload.includes.Entry[i];
                        let {
                            data
                        } = this.normalize(store.modelFor(item.sys.contentType.sys.id), item);
                        entries.push(data);
                    }
                }

                if (payload.includes.Asset) {
                    for (let i = 0, l = payload.includes.Asset.length; i < l; i++) {
                        let item = payload.includes.Asset[i];
                        let {
                            data
                        } = this.normalize(store.modelFor('contentful-asset'), item);
                        assets.push(data);
                    }
                }

                documentHash.included = entries.concat(assets);
            }
        }

        return documentHash;
    },

    _extractIncludes(store, payload) {
        var _this3 = this;

        if (payload && payload.hasOwnProperty('includes') && typeof payload.includes !== 'undefined') {
            var entries = new Array();
            var assets = new Array();

            if (payload.includes.Entry) {
                entries = payload.includes.Entry.map(function (item) {
                    return _this3.normalize(store.modelFor(item.sys.contentType.sys.id), item).data;
                });
            }

            if (payload.includes.Asset) {
                assets = payload.includes.Asset.map(function (item) {
                    return _this3.normalize(store.modelFor('contentful-asset'), item).data;
                });
            }

            return entries.concat(assets);
        } else {
            return [];
        }
    },

    extractAttributes(modelClass, fieldsHash, objHash) {
        let attributeKey;
        let attributes = {};

        if (objHash.sys.type === 'Error') {
            console.warn(`[Contentful] ${objHash.message}`);
            console.warn(`[Contentful] It is possible that ${objHash.details.type}:${objHash.details.id} is not published, but is linked in this Entry.`);
            return {};
        }

        modelClass.eachAttribute((key) => {
            attributeKey = this.keyForAttribute(key, 'deserialize');
            if (fieldsHash && fieldsHash.hasOwnProperty(attributeKey)) {
                let attributeValue = fieldsHash[attributeKey];
                if (typeof attributeValue === 'object' && objHash.sys.type !== 'Asset' && typeof attributeValue.sys !== 'undefined') {
                    attributeValue = attributeValue.sys.id;
                }
                attributes[key] = attributeValue;
            }
            if (objHash) {
                attributes['contentType'] = objHash.sys.type === 'Asset' ? 'asset' : objHash.sys.contentType.sys.id;
                attributes['createdAt'] = objHash.sys.createdAt;
                attributes['updatedAt'] = objHash.sys.updatedAt;
            }
        });

        return attributes;
    }

});
