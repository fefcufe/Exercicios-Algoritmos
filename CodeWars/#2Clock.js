function past(h, m, s) {
    const milisseconds = (h * 60**2 * 1000) + (m * 60 * 1000) + (s * 1000)
    console.log(milisseconds)
}

past(13, 34, 45)