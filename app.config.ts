export default defineAppConfig({
  ui: {
    primary: "tbqblue",
    gray: "cool",
    container: {
      base: "mx-auto",
      padding: "px-6 sm:px-6 lg:px-6",
      constrained: "container max-w-[auto]",
    },
    formGroup: {
      description: "text-gray-500 dark:text-gray-400 text-sm",
      hint: "text-gray-500 dark:text-gray-400 text-sm",
      help: "mt-2 text-gray-500 dark:text-gray-400 text-sm",
      error: "mt-2 text-red-500 dark:text-red-400 text-sm",
    },
  },
});
