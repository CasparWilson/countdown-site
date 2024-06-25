function displayCountdown(num) {
    if (num > 1) {
        return num;
    }
    if (num === 1) {
        return "🧑‍🚀";
    }
    if (num === 0) {
        return "🚀";
    }
}

export { displayCountdown };
