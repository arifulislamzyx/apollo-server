import Menu from "./modals/menu.js";

const resolvers = {
  Query: {
    menu: async () => {
      try {
        const menuItems = await Menu.find({});
        // Assuming Menu.find({}) returns an array of menu items
        return menuItems;
      } catch (error) {
        console.error("Error fetching menu items:", error);
        throw new Error("Failed to fetch menu items");
      }
    },
  },
};

export default resolvers;
