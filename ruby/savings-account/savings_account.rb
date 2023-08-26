module SavingsAccount
  INTEREST_RATES = { positive_less_than_1000: 0.5,
                     positive_between_1000_and_5000: 1.621,
                     positive_greater_than_5000: 2.475,
                     negative: 3.213, }

  def self.interest_rate(balance)
    if balance >= 0 and balance < 1000
      INTEREST_RATES[:positive_less_than_1000]
    elsif balance >= 1000 and balance < 5000
      INTEREST_RATES[:positive_between_1000_and_5000]
    elsif balance >= 5000
      INTEREST_RATES[:positive_greater_than_5000]
    else
      INTEREST_RATES[:negative]
    end
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
