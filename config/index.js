const leetcodeUsername = 'jackykg'
const configs = {
  leetcode: {
    graphql: 'https://leetcode.com/graphql/',
    query: {
      badge: {
        query: `query userBadges($username: String!) {
      matchedUser(username: $username) {
        badges {
          id
          name
          shortName
          displayName
          icon
          hoverText
          medal {
            slug
            config {
              iconGif
              iconGifBackground
            }
          }
          creationDate
          category
        }
        upcomingBadges {
          name
          icon
          progress
        }
      }
    }`,
        variables: {
          username: leetcodeUsername
        }
      },
      dailysubmition: {
        query: `
    query userProfileCalendar($username: String!, $year: Int) {
  matchedUser(username: $username) {
    userCalendar(year: $year) {
      activeYears
      streak
      totalActiveDays
      dccBadges {
        timestamp
        badge {
          name
          icon
        }
      }
      submissionCalendar
    }
  }
}
    `,
        variables: {
          "username": "jackykg",
          "year": 2024
        }
      },
      profile: {
        query: `
    query userProfileUserQuestionProgressV2($userSlug: String!) {
  userProfileUserQuestionProgressV2(userSlug: $userSlug) {
    numAcceptedQuestions {
      count
      difficulty
    }
    numFailedQuestions {
      count
      difficulty
    }
    numUntouchedQuestions {
      count
      difficulty
    }
    userSessionBeatsPercentage {
      difficulty
      percentage
    }
    totalQuestionBeatsPercentage
  }
}
    `,
        variables: { userSlug: 'jackykg' }
      }
    }
  },
}

export default configs