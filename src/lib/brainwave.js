let xs= []

//adds a coordenate from 0 to 500px increasingly - for loop is adding each coordenate to tye xs array
for (var i=0; i< 900; i++) {
  xs.push(i)

}

//Time frame to move the coordenates
let t = 0

 
async function animate() {

// Turn each individual x coordenats to a line 
  let points = xs.map((x)=> {

  //apply calculation to draw wave
    let y = 300 + 150 * Math.sin((x + t) /25)
    return[x, y]
  })

  //Ad path attribute ( coordenates in browser) using the points calculated earlier in for loop
  let newPath = "M" + points.map((p) => {
    return p[0] + "," + p[1]
  }).join("L")

  // use the path calculated in JS to replace the path initially declared in css - Use map to apply the new path to each querySelector

  let pathList =  document.querySelectorAll("path")
   Array.from(pathList).map(elem => {
    return elem.setAttribute('d', newPath)
  })

  t += 1
  
  requestAnimationFrame(animate)

}

animate()