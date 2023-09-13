class NotMovieClubMemberError < RuntimeError; end

class Moviegoer
  def initialize(age, member: false)
    @age = age
    @member = member
  end

  def ticket_price
    @age < 60 ? 15.00 : 10.00
  end

  def watch_scary_movie?
    @age < 18 ? false : true
  end

  def claim_free_popcorn!
    @member ? "🍿" : (raise NotMovieClubMemberError.new('NotMovieClubMemberError'))
  end
end
