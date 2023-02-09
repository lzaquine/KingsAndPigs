Array.prototype.parse2D = function() {
    const rows = []
    for(let i = 0; i < this.length; i += 45) {
        rows.push(this.slice(i, i + 45))
    }

    return rows
}

Array.prototype.createObjectsFrom2D = function() {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if(symbol === 296) {
                objects.push(new CollisionBlock({
                    position: {
                        x: x * 32,
                        y: y * 32,
                    },
                }))
            }
        })
    })

    return objects
}