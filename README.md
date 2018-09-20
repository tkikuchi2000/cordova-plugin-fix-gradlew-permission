# cordova-plugin-fix-gradlew-permission
Fix gradlew permission for *nix (not for windows).


## How to Use

Install the plugin by fetching the dependencies

    $ cordova plugin add https://github.com/tkikuchi2000/cordova-plugin-fix-gradlew-permission.git#1.0.0

Install Android platform

    cordova platform add android
    
Run Android Studio and sync gradle

Run the code

    cordova prepare android

`platforms/android/gradlew` is changed permission like this:

```
$ ls -la platforms/android/gradlew
-rwx-r-x-r-x    1 user  group  5296 4  5 15:21 platforms/android/gradlew
```
