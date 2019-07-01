import Target from '../components/GameObject';
const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false,
  targets: {0: new Target(50, 30, 3), 1: new Target(30, 50, 4), 2: new Target(30, 30, 1), 3:new Target(10, 10, 6)},
  scoreMultiple: 1,
  total: 0,
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...state,
        isStarted: true
      };
    case "GAME_STOP":
      return {
        ...state,
        isStarted: false
      };
    case "TARGET_CLICKED":
        let listTarget = { ...state.targets };
        let target = listTarget[action.id]
        let score = state.score;
        let total = state.total;
        let scoreMultiple = state.scoreMultiple;
        if (total === 3)
        {
          scoreMultiple += 1;
          total = 0;
        }
        if (score % 2 === 0)
        {
          if (target.x <= 85)
          {
            target.x = target.x + getRandomInt(20);
          }
          else
          {
            target.x = target.x - getRandomInt(20);
          }
          
          if (target.y <= 85)
          {
            target.y = target.y + getRandomInt(20);
          }
          else
          {
            target.y = target.y - getRandomInt(20);
          }
        }
        else
        {
          if (target.x <= 85)
          {
            target.x = target.x + getRandomInt(20);
          }
          else
          {
            target.x = target.x - getRandomInt(20);
          }
          
          if (target.y <= 85)
          {
            target.y = target.y + getRandomInt(20);
          }
          else
          {
            target.y = target.y - getRandomInt(20);
          }
        }
      
        target.value += getRandomInt(11 - scoreMultiple);

        const test = Object.keys(listTarget).map((targetId, index) => {
          const target = listTarget[targetId];
          target.value -= 1;
          if (target.value < 0)
          {
            target.value += getRandomInt(5);
          }
          if (target.value >= 12)
            target.value -= getRandomInt(5);  
          return target.value;  
        })

        var lives = state.lives;

        var isZero = false;
        for (var i = 0; i < test.length; i++)
        {

          if (test[i] === 0)
          {
            lives -= 1;
            isZero = true;
          }
        }

        if (isZero === false)
          total += 1;
        else
        {
          scoreMultiple = 1;
          total = 0;
        }

        return {
          ...state,
          targets: listTarget,
          scoreMultiple: scoreMultiple,
          total: total,
          score: state.score + 1 * state.scoreMultiple,
          lives: lives
        };
    default:
      return state;
  }
};

export default game;
