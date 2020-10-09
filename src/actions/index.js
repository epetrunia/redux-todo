import ACTION_TYPES from './types';

export const increment = () => ({
  type: ACTION_TYPES.COUNTER_INCREMENT,
});

export const decrement = () => ({
  type: ACTION_TYPES.COUNTER_DECREMENT,
});

export const setStep = (stepValue) => ({
  type: ACTION_TYPES.COUNTER_SET_STEP,
  step: stepValue,
});

export const createAddTaskAction = (task) => ({
  type: ACTION_TYPES.ADD_TASK_ACTION,
  task,
});

export const createUpdateTaskAction = (taskIndex, values) => ({
  type: ACTION_TYPES.UPDATE_TASK_ACTION,
  taskIndex,
  values,
});

export const createRemoveTaskAction = (taskIndex) => ({
  type: ACTION_TYPES.REMOVE_TASK_ACTION,
  taskIndex,
});
