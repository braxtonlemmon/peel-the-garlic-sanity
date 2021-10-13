export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "text",
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "is_published",
      title: "Published",
      type: "boolean",
    },
    {
      name: "publish_date",
      title: "Publish date",
      type: "datetime",
      description: "When recipe was deployed to site",
    },
    {
      name: "created",
      title: "Created date",
      type: "datetime",
      description: "When recipe was added to database",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "number",
      description: "How long it takes to make recipe (prep + cook)",
    },
    {
      name: "intro",
      title: "Blog intro",
      type: "text",
      description: "Primary blog post blurb",
    },
    {
      name: "quote",
      title: "Quote",
      type: "text",
    },
    {
      name: "size",
      title: "Serving size",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Short summary of blog post",
    },
    {
      name: "keywords",
      title: "List of keywords",
      type: "string",
    },
    {
      name: "prep_time",
      title: "Prep time",
      type: "number",
    },
    {
      name: "cook_time",
      title: "Cook time",
      type: "number",
    },
    {
      name: "category",
      title: "Meal category",
      type: "string",
      description: "e.g. Lunch, Dinner",
    },
    {
      name: "cook_method",
      title: "Cooking method",
      type: "string",
      desciption: "e.g. Boil, Fry",
    },
    {
      name: "cuisine",
      title: "Cuisine",
      type: "string",
      description: "e.g. Asian, German",
    },
    {
      name: "ratings",
      title: "Ratings",
      type: "array",
      of: [
        {
          type: "number",
        },
      ],
    },
  ],
};
