function countAndSay(n: number): string {
    let current = "1";

    for (let i = 1; i < n; i++) {
        let next = "";
        let count = 1;

        for (let j = 0; j < current.length; j++) {
            
            if (j + 1 < current.length && current[j] === current[j + 1]) {
                count++;
            } else {
               
                next += count.toString() + current[j];
                count = 1; 
            }
        }

        current = next;
    }

    return current;
}