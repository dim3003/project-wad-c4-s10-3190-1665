module ApplicationHelper

  CAT_AVATAR = "https://68.media.tumblr.com/7d65a925636d6e3df94e2ebe30667c29/tumblr_nq1zg0MEn51qg6rkio1_500.jpg"
  BLOCK_AVATAR = "https://68.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_500.png"
  TRIANGLE_AVATAR = "http://78.media.tumblr.com/75bad14fee104f69652084d545213291/tumblr_mldfty8fh41qcnibxo5_1280.png"
  HAT_AVATAR = "https://68.media.tumblr.com/22d1c50c3e2ca1062a94b47a65bfeb6d/tumblr_o51oavbMDx1ugpbmuo10_500.png"

  def default_avatar(user)

    return CAT_AVATAR if user.name[0].nil?

    logger.info(user)

    case(user.name[0].downcase)
    when 'a'..'h' then  CAT_AVATAR
    when 'i'..'n' then  BLOCK_AVATAR
    when 'o'..'u'  then  TRIANGLE_AVATAR
    else    HAT_AVATAR
    end

  end

  def pluralize_comments(comments)
    if(comments.count <= 1)
      "#{comments.count} comment"
    else
      "#{comments.count} comments"
    end
  end

  def pluralize_tips(tips)
    if(tips.count <= 1)
      "#{tips.count} tip"
    else
      "#{tips.count} tips"
    end
  end

  def format_time(instance)
    instance.created_at.strftime("%e %b %Y at %H:%M")
  end

end
