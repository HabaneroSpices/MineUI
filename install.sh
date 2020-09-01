#/bin/bash
#
#MINECRAFT_PATH=`cat ./.settings`

echo "[!] This script requires sudo privleges"
sudo -v

install_here() {

    MINECRAFT_PATH=`cat ./.settings`
    echo "[*] Setting privledges..."
    sudo chmod +x .mcsrv.sh
    echo "[*] Logging..."
    sudo ln -s ${MINECRAFT_PATH}logs

}

depend_aptyum() {
    echo "[!] Please input path to minecraft server"
    echo "Example: /path/to/server/"
    read -r -p 'Location: ' SERVER_PATH
    echo "[*] Crafting .settings"
    sudo echo ${SERVER_PATH} > .settings
}


depend_aptyum
install_here
echo "[+] Done!"

# Obsolete
#case $1 in
#
#apt)
#    echo ">>Using $1."
#    depend_aptyum
#    install_here
#    echo "Done!"
#    ;;
#
#yum)
#    echo ">>Using $1."
#    depend_aptyum
#    install_here
#    echo "Done!"
#    ;;
#*)
#	echo "usage... $0 ()"
#	;;
#
#esac

