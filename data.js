var APP_DATA = {
  "scenes": [
    {
      "id": "0-quarto",
      "name": "Quarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24307574129783305,
          "pitch": 0.2962521048436848,
          "rotation": 0,
          "target": "1-quarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-quarto",
      "name": "Quarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3562464237598171,
          "pitch": 0.2802990598233279,
          "rotation": 0,
          "target": "0-quarto"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "QUARTO DE MENINA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
