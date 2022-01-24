export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "created",
      title: "Created",
      type: "datetime",
    },
    {
      name: "recipe",
      title: "Recipe",
      type: "reference",
      to: { type: "recipe" },
    },
    {
      name: "level",
      title: "Level",
      type: "number",
      description: "Depth of comment within comment thread. Zero is top-level.",
    },
    {
      name: "fromAdmin",
      title: "From admin",
      type: "boolean",
      description: "Was the comment created by Peel the Garlic admin?",
    },
    {
      name: "answered",
      title: "Answered",
      type: "boolean",
      description: "Has Peel the Garlic responded to this comment?",
    },
    {
      name: "parent",
      title: "Parent",
      type: "reference",
      to: { type: "comment" },
    },
  ],
};
