import { defineAsyncComponent } from "vue";

const modules = import.meta.glob("/src/posts/*.md");

const fetchAllPosts = () => {
  let posts = [];

  try {
    for (const path in modules) {
      const importName = path.substring(
        path.indexOf("-") + 1,
        path.lastIndexOf(".md")
      );
      const fileLocation = path.substring(
        path.indexOf("posts/") + 6,
        path.lastIndexOf(".md")
      );
      posts.push({ importName, fileLocation });
    }
    return posts;
  } catch (error) {
    return error;
  }
};

export const importModules = () => {
  const posts = fetchAllPosts();
  let importComponents = [];
  try {
    for (const moduleInfo of posts) {
      const { importName, fileLocation } = moduleInfo;
      importComponents.push(
        defineAsyncComponent(() => import(`../posts/${fileLocation}.md`))
      );
      console.log(`${importName} module imported successfully.`);
    }
    return importComponents;
  } catch (error) {
    console.error(`Error importing the module:`, error);
  }
};
