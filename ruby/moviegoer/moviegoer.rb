class NotMovieClubMemberError < RuntimeError; end

class Moviegoer
  REGULAR_TICKET_PRICE = 10.00
  SENIORS_TICKET_PRICE = 15.00

  def initialize(age, member: false)
    @age = age
    @member = member
  end

  def ticket_price
    seniors_discount? ? SENIORS_TICKET_PRICE : REGULAR_TICKET_PRICE
  end

  def watch_scary_movie?
    adult? ? true : false
  end

  def claim_free_popcorn!
    program_member? ? "🍿" : (raise NotMovieClubMemberError.new)
  end

  private

  def seniors_discount?
    @age < 60
  end

  def adult?
    @age >= 18
  end

  def program_member?
    @member
  end
end
