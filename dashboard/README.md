# Docker as dev environement


```
docker build --rm -t="loader_1" dashboard
docker run -ti -v $PWD:/insee-elk-data loader_1
```


```
# telecharge les donnees geographiques iris et les nettoie
cd /insee-elk-data/insee-iris
make
node index.js

# telecharge les donnees insee et les agrège
cd /insee-elk-data/insee
make download
python mk_data.py

# build les dépendances du dashboard
cd /insee-elk-data/dashboard
npm install
```

# Docker for deployment

```
docker-compose up -d
```

use `docker-machine ls`  to get the ip and go to `http://192.168.99.100:5601/`


