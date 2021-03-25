module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ["@babel/plugin-transform-flow-strip-types"],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    // ["module-resolver",
    //     {
    //         root: ["."],
    //         alias: {"^app/conf/(.+)": appBuildEnv ? `${projectPackageName}/conf/${appBuildEnv}/\\1` : "app/conf/\\1"},
    //     }
    // ],
  ],
};
