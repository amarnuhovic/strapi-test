'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::home-page.home-page',
  ({ strapi }) => ({
    async find(ctx) {
      console.log(ctx);

      const entity = await strapi.db.query('api::home-page.home-page').findOne({
        where: { id: 1 },
        populate: {
          header: true,
          title: true,
          description: true,
          list: {
            populate: {
              title: true,
              description: true,
              image: true,
            },
          },
        },
      });

      const header = entity.header;
      const title = entity.title;
      const description = entity.description;
      const list = entity.list || [];

      const listData = list.map((item) => ({
        title: item.title,
        description: item.description,
        image: item.image?.url || null,
      }));

      return {
        header,
        title,
        description,
        list: listData,
      };
    },
  })
);
