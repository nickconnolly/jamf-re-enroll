module.exports = {
  packagerConfig: {
    asar: true,
    arch: ["universal", "x64", "arm64", "armv7l"], // Added 'armv7l' for ARM support
    icon: "./icon.icns",
  },
  makers: [
    { name: "@electron-forge/maker-zip", platforms: ["darwin"] },
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "reEnroll",
        setupExe: "Re-Enroll Jamf.exe",
        setupIcon: "./icon.ico",
      },
      platforms: ["win32"],
    },
  ],

  plugins: [{ name: "@electron-forge/plugin-auto-unpack-natives", config: {} }],
  mac: {
    category: "public.app-category.utilities",
    icon: "./icon.icns",
    type: "distribution",
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: "./entitlements.plist",
    entitlementsInherit: "./entitlements.plist",
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "nickconnolly",
          name: "Re-Enroll",
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
};
