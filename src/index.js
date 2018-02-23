// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
 if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if (currency <= 0) {
        return {}
    }

    dic = {'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1};
    reminder = currency;
    exchanged_money = {};
    for (let key in dic) {
        res = count(reminder, dic[key], key);

        if (res[1][1] !== 0 && res[1][1] !== undefined) {
            exchanged_money[res[1][0]] = res[1][1];
        }
        reminder = res[0];
    }

    return exchanged_money
}
function count(value, divivder, divider_name) {
    reminder = value % divivder;
    if (value / divivder > 0) {
        amount = [divider_name, (value - reminder) / divivder];
    } else {
        amount = []
    }
    return [reminder, amount]
}
