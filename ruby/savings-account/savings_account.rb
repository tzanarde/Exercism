module SavingsAccount
  RATES = { between_0_and_1000: 0.5,
            between_1000_and_5000: 1.621,
            greater_than_5000: 2.475,
            negative: 3.213, }

  def self.interest_rate(balance)
    return RATES[:negative] if balance.negative?
    return RATES[:between_0_and_1000] if balance < 1000
    return RATES[:between_1000_and_5000] if balance < 5000
    RATES[:greater_than_5000]
  end

  def self.annual_balance_update(balance)
    balance + (balance * interest_rate_percent(balance))
  end

  def self.years_before_desired_balance(current_balance, desired_balance)
    years = 0
    until current_balance >= desired_balance do
      current_balance = annual_balance_update(current_balance)
      years += 1
    end
    years
  end

  private

  def self.interest_rate_percent(balance)
    interest_rate(balance) / 100
  end
end
