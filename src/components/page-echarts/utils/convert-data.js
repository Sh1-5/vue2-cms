import { coordinateData } from './coordinate-data'

export default function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
