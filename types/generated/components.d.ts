import type { Struct, Schema } from '@strapi/strapi';

export interface ListList extends Struct.ComponentSchema {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BubbleSectionBubbleSection extends Struct.ComponentSchema {
  collectionName: 'components_bubble_section_bubble_sections';
  info: {
    displayName: 'bubbleSection';
    icon: 'cloud';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'list.list': ListList;
      'bubble-section.bubble-section': BubbleSectionBubbleSection;
    }
  }
}
