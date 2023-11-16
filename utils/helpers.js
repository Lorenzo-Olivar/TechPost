module.exports = {
    format_date: (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    },
};