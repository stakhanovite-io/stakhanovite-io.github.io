## Understanding Stake Pool fees

The fee structure of a stake pool consists of several elements. It is important to know them, so that you are not surprised when you receive the rewards.

>### Fixed fee

The fixed fee is the amount of ada the operator of the pool will take at the end of each epoch **out of the total rewards** of the pool and this, **regardless of what happens**. 

  - If the total rewards of the stake pool are less than the fixed fee (or fixed cost), **delegates will not receive any rewards.**

  - **The minimum fixed fee** that a pool is allowed to charge is **340 ADA** per period. 

>### Margin (or variable fee)

The margin defines the percentage of the total rewards that operators taker **after deduction of the fixed fee** and **before payment to the delegates**. 

  - A stake group with a 100% margin will be considered private, unless you wish to give everything to the operators!


> **Example :**

You delegate to a stake pool that has the following fees

>**Fixed = 340 ADA // Margin = 1.9%**

Let's imagine that at the end of an epoch, the stake pool has received **50,000 ADA.**

The operator charges 340 ADA first. It then calculates 1.9% of the remaining 49660 ADA, i.e. ~944 ADA. There are now 48716 ADAs left to share for the delegates. If your delegated stake represents **5% of the group's total stake** (i.e. approximately 10 million ADA for a group that has reached saturation ...), you will be rewarded for **5% of these ~48716 ADA, i.e. ~2435 ADA.**