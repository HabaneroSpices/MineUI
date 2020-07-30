# MineUI: Minecraft Server Panel

# Install (auto)
**Using install.sh**
```
$ bash install.sh apt
or
$ bash install.sh yum
```

# Install (manual)
**Setting the server path.**
```
$ touch .settings

$ echo /path/to/server/ > .settings
```

**Create a softlink.**
```
$ ln -s /path/to/server/logs
```

**Give `.mcsrv.sh` execution permission.**
```
$ sudo chmod +x .mcsrv.sh
```

**Done! ^-^**
