ssh pi@192.168.0.102 pgrep node | xargs kill -9
# rm -R node_modules
ssh pi@192.168.0.102 rm -R nmr-pi-gkart 
rsync -r * pi@192.168.0.102:nmr-pi-gkart
ssh pi@192.168.0.102 cd nmr-pi-gkart 
