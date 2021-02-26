import CIMSymbol from "https://js.arcgis.com/4.18/@arcgis/core/symbols/CIMSymbol.js";
// import WebStyleSymbol from "https://js.arcgis.com/4.18/@arcgis/core/symbols/WebStyleSymbol.js";

// More custom CIMs
export default {
    pictureMarker: function(){
        // Built using https://developers.arcgis.com/javascript/latest/sample-code/playground/live/
        return {
            type: "picture-marker",
            url: "https://arcgis.github.io/arcgis-samples-javascript/sample-data/cat1.png",
            width: 46,
            height: 46
          }
    },
    point: function(){
        // Built using https://developers.arcgis.com/javascript/latest/sample-code/playground/live/
        return {
            type: "simple-marker",
            outline: { width: 1.25, color: [255, 255, 255, 1] },
            color: [75, 169, 225, 0.77]
        }
    },
    marker: function(){
        // Extracted from https://developers.arcgis.com/javascript/latest/esri-icon-font/
        return {
            type: "text",
            color: "#7A003C",
            text: "\ue61d", // esri-icon-map-pin
            font: {
                size: 30,
                family: "CalciteWebCoreIcons"
            }
        }
    },
    webstyle: function(){
        // Extrated from https://developers.arcgis.com/javascript/latest/esri-web-style-symbols-2d/#poi-large
        // autocasts as new WebStyleSymbol()
        return {
            type: "web-style",
            name: "aerial-tram",
            styleName: "Esri2DPointSymbolsStyle"
          }
    },
    airport: function(){
        // Extrated from https://developers.arcgis.com/javascript/latest/esri-web-style-symbols-2d/#poi-large
        return new CIMSymbol({"data":{"type":"CIMSymbolReference","symbol":{"type":"CIMPointSymbol","symbolLayers":[{"type":"CIMVectorMarker","enable":true,"anchorPointUnits":"Relative","dominantSizeAxis3D":"Y","size":15.75,"billboardMode3D":"FaceNearPlane","frame":{"xmin":0,"ymin":0,"xmax":21,"ymax":21},"markerGraphics":[{"type":"CIMMarkerGraphic","geometry":{"rings":[[[11.9,12.17],[17.42,8.13],[18.03,7.47],[18.24,6.86],[18.24,6.05],[11.9,8.48],[11.7,6.19],[11.48,4.82],[12.94,3.42],[13.24,3.1],[13.35,2.79],[13.35,2],[10.5,2.77],[7.65,2],[7.65,2.79],[7.76,3.1],[8.06,3.42],[9.52,4.82],[9.3,6.19],[9.1,8.48],[2.76,6.05],[2.76,6.86],[2.97,7.47],[3.58,8.13],[9.1,12.17],[9.1,15.76],[9.19,16.78],[9.46,17.68],[9.92,18.45],[10.5,19],[11.08,18.45],[11.54,17.68],[11.81,16.78],[11.9,15.76],[11.9,12.17]]]},"symbol":{"type":"CIMPolygonSymbol","symbolLayers":[{"type":"CIMSolidStroke","enable":true,"capStyle":"Round","joinStyle":"Round","lineStyle3D":"Strip","miterLimit":10,"width":0,"color":[0,0,0,255]},{"type":"CIMSolidFill","enable":true,"color":[88,89,91,255]}]}}],"scaleSymbolsProportionally":true,"respectFrame":true},{"type":"CIMVectorMarker","enable":true,"colorLocked":true,"anchorPointUnits":"Relative","dominantSizeAxis3D":"Y","size":18.5,"billboardMode3D":"FaceNearPlane","frame":{"xmin":-5,"ymin":-5,"xmax":5,"ymax":5},"markerGraphics":[{"type":"CIMMarkerGraphic","geometry":{"rings":[[[0,5],[0.87,4.92],[1.71,4.7],[2.5,4.33],[3.21,3.83],[3.83,3.21],[4.33,2.5],[4.7,1.71],[4.92,0.87],[5,0],[4.92,-0.87],[4.7,-1.71],[4.33,-2.5],[3.83,-3.21],[3.21,-3.83],[2.5,-4.33],[1.71,-4.7],[0.87,-4.92],[0,-5],[-0.87,-4.92],[-1.71,-4.7],[-2.5,-4.33],[-3.21,-3.83],[-3.83,-3.21],[-4.33,-2.5],[-4.7,-1.71],[-4.92,-0.87],[-5,0],[-4.92,0.87],[-4.7,1.71],[-4.33,2.5],[-3.83,3.21],[-3.21,3.83],[-2.5,4.33],[-1.71,4.7],[-0.87,4.92],[0,5]]]},"symbol":{"type":"CIMPolygonSymbol","symbolLayers":[{"type":"CIMSolidStroke","enable":true,"capStyle":"Round","joinStyle":"Round","lineStyle3D":"Strip","miterLimit":10,"width":0.5,"color":[167,169,172,255]},{"type":"CIMSolidFill","enable":true,"color":[255,255,255,255]}]}}],"scaleSymbolsProportionally":true,"respectFrame":true}],"haloSize":1,"scaleX":1,"angleAlignment":"Display","version":"2.0.0","build":"8933"}}})
    },
    park: function(){
        return new CIMSymbol({ "data": { "type": "CIMSymbolReference", "symbol": { "type": "CIMPointSymbol", "symbolLayers": [ { "type": "CIMVectorMarker", "enable": true, "anchorPointUnits": "Relative", "dominantSizeAxis3D": "Y", "size": 15.75, "billboardMode3D": "FaceNearPlane", "frame": { "xmin": 0, "ymin": 0, "xmax": 21, "ymax": 21 }, "markerGraphics": [ { "type": "CIMMarkerGraphic", "geometry": { "rings": [ [ [ 15, 15 ], [ 12, 15 ], [ 16, 10 ], [ 13, 10 ], [ 17, 5 ], [ 11, 5 ], [ 11, 2 ], [ 10, 2 ], [ 10, 5 ], [ 4, 5 ], [ 8, 10 ], [ 5, 10 ], [ 9, 15 ], [ 6, 15 ], [ 10.5, 19 ], [ 15, 15 ] ] ] }, "symbol": { "type": "CIMPolygonSymbol", "symbolLayers": [ { "type": "CIMSolidStroke", "enable": true, "capStyle": "Round", "joinStyle": "Round", "lineStyle3D": "Strip", "miterLimit": 10, "width": 0, "color": [ 0, 0, 0, 255 ] }, { "type": "CIMSolidFill", "enable": true, "color": [ 113, 201, 110, 255 ] } ] } } ], "scaleSymbolsProportionally": true, "respectFrame": true }, { "type": "CIMVectorMarker", "enable": true, "colorLocked": true, "anchorPointUnits": "Relative", "dominantSizeAxis3D": "Y", "size": 18.5, "billboardMode3D": "FaceNearPlane", "frame": { "xmin": -5, "ymin": -5, "xmax": 5, "ymax": 5 }, "markerGraphics": [ { "type": "CIMMarkerGraphic", "geometry": { "rings": [ [ [ 0, 5 ], [ 0.87, 4.92 ], [ 1.71, 4.7 ], [ 2.5, 4.33 ], [ 3.21, 3.83 ], [ 3.83, 3.21 ], [ 4.33, 2.5 ], [ 4.7, 1.71 ], [ 4.92, 0.87 ], [ 5, 0 ], [ 4.92, -0.87 ], [ 4.7, -1.71 ], [ 4.33, -2.5 ], [ 3.83, -3.21 ], [ 3.21, -3.83 ], [ 2.5, -4.33 ], [ 1.71, -4.7 ], [ 0.87, -4.92 ], [ 0, -5 ], [ -0.87, -4.92 ], [ -1.71, -4.7 ], [ -2.5, -4.33 ], [ -3.21, -3.83 ], [ -3.83, -3.21 ], [ -4.33, -2.5 ], [ -4.7, -1.71 ], [ -4.92, -0.87 ], [ -5, 0 ], [ -4.92, 0.87 ], [ -4.7, 1.71 ], [ -4.33, 2.5 ], [ -3.83, 3.21 ], [ -3.21, 3.83 ], [ -2.5, 4.33 ], [ -1.71, 4.7 ], [ -0.87, 4.92 ], [ 0, 5 ] ] ] }, "symbol": { "type": "CIMPolygonSymbol", "symbolLayers": [ { "type": "CIMSolidStroke", "enable": true, "capStyle": "Round", "joinStyle": "Round", "lineStyle3D": "Strip", "miterLimit": 10, "width": 0.5, "color": [ 167, 169, 172, 255 ] }, { "type": "CIMSolidFill", "enable": true, "color": [ 255, 255, 255, 255 ] } ] } } ], "scaleSymbolsProportionally": true, "respectFrame": true } ], "haloSize": 1, "scaleX": 1, "angleAlignment": "Display", "version": "2.0.0", "build": "8933" } } });
    }
}
