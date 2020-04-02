// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

// NOTE: EVERY SINGLE reducer is going to run EVERYTIME we dispatch something! It is up to the reducer (based on type of action) to run/act or not!

function posts(state = [], action) {
  console.log('The post will change!');
  console.log(state, action);
  return state;
}

export default posts;
