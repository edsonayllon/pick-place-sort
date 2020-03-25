const pickPlace = function(input) {
    const lines = input.split('\n')
    for (i in lines) {

        // recieve k and s values
        const [k, s] = parseLine(lines[i])

        // if k > 1, optimal sorting will always be regular alphabetical sort
        if (k > 1) {
            // print result of line
            console.log(s.sort().join(''))

        // when k = 1, optimal sorting will be the lowest lexigraphical value by shifting the string
        } else {

            // start with optimal index at the start and smallest lexigraphical character as z
            let minIndex = 0
            let minElement = 'z'
            for (n in s) {
                n = parseInt(n) // index should be a number to perform arithmetic

                // if current element is smaller than the saved minimum element, assign as new minimum element
                if (s[n] < minElement) {
                    minElement = s[n]
                    minIndex = n
                
                // if another instance of the minimum element, check if following elements are smaller lexigraphically
                } else if(s[n] === minElement) {
                    // cover case where lexigraphical comparison loops past end of string
                    let tempN = ((n + 1) % s.length)
                    let tempMin = minIndex + 1
                    while (tempMin < n) {
                        if(s[tempN] < s[tempMin]) {
                            minElement = s[n]
                            minIndex = n
                            break
                        } else if (s[tempN] > s[tempMin]) {
                            break
                        }
                        tempN = ((tempN + 1) % s.length)
                        tempMin = tempMin + 1;
                    }
                }
            }

            // print result of line
            console.log(s.splice(minIndex).join('') + s.splice(0,minIndex).join(''))
        }
    }
}

const parseLine = function(line) {
    // convert number to number and string to an array of characters, return as tuple
    const split = line.split(' ')
    return [parseInt(split[0]), split[1].split('')]
}


// run default test case
const app = function() {
    const input = `1 cbad
2 ababbc
1 yaadcbccaadcbcb`

    pickPlace(input)
}

app()