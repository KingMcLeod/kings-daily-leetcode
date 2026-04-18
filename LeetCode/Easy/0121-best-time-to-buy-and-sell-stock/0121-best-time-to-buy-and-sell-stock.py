class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        lowest_stock = prices[0]

        for i in range(len(prices)):
            curr_day = prices[i]
            curr_profit = curr_day - lowest_stock

            if curr_profit > max_profit:
                max_profit = curr_profit
            elif curr_day < lowest_stock:
                lowest_stock = curr_day
                
        return max_profit