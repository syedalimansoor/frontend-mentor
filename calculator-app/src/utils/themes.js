export const dark = {
  backgrounds: {
    "main": "hsl(222, 26%, 31%)",
    "toggle": "hsl(223, 31%, 20%)",
    "keypad": "hsl(223, 31%, 20%)",
    "screen": "hsl(224, 36%, 15%)",
  },
  keys: {
    "toggle": "hsl(6, 63%, 50%)",
    "del": {
      background: "hsl(225, 21%, 49%)",
      shadow: "hsl(224, 28%, 35%)",
    },
    "reset": {
      background: "hsl(225, 21%, 49%)",
      shadow: "hsl(224, 28%, 35%)",
    },
    "=": {
      background: "hsl(6, 63%, 50%)",
      shadow: "hsl(6, 70%, 34%)",
    },
    "default": {
      background: "hsl(30, 25%, 89%)",
      shadow: "hsl(28, 16%, 65%)",
    },
  },
  text: {
    "numbers": "hsl(221, 14%, 31%)",
    "screen": "hsl(0, 0%, 100%)",
    "reset": "hsl(0, 0%, 100%)",
    "del": "hsl(0, 0%, 100%)",
    "=": "hsl(0, 0%, 100%)",
  },
};

export const light = {
  backgrounds: {
    "main": "hsl(0, 0%, 90%)",
    "toggle": "hsl(0, 5%, 81%)",
    "keypad": "hsl(0, 5%, 81%)",
    "screen": "hsl(0, 0%, 93%)",
  },
  keys: {
    "toggle": "hsl(25, 98%, 40%)",
    "del": {
      background: "hsl(185, 42%, 37%)",
      shadow: "hsl(185, 58%, 25%)",
    },
    "reset": {
      background: "hsl(185, 42%, 37%)",
      shadow: "hsl(185, 58%, 25%)",
    },
    "=": {
      background: "hsl(25, 98%, 40%)",
      shadow: "hsl(25, 99%, 27%)",
    },
    "default": {
      background: "hsl(45, 7%, 89%)",
      shadow: "hsl(35, 11%, 61%)",
    },
  },
  text: {
    "numbers": "hsl(60, 10%, 19%)",
    "screen": "hsl(60, 10%, 19%)",
    "reset": "hsl(0, 0%, 100%)",
    "del": "hsl(0, 0%, 100%)",
    "=": "hsl(0, 0%, 100%)",
  },
};

export const weird = {
  backgrounds: {
    "main": "hsl(268, 75%, 9%)",
    "toggle": "hsl(268, 71%, 12%)",
    "keypad": "hsl(268, 71%, 12%)",
    "screen": "hsl(268, 71%, 12%)",
  },
  keys: {
    "toggle": "hsl(176, 100%, 44%)",
    "del": {
      background: "hsl(281, 89%, 26%)",
      shadow: "hsl(285, 91%, 52%)",
    },
    "reset": {
      background: "hsl(281, 89%, 26%)",
      shadow: "hsl(285, 91%, 52%)",
    },
    "=": {
      background: "hsl(176, 100%, 44%)",
      shadow: "hsl(177, 92%, 70%)",
    },
    "default": {
      background: "hsl(268, 47%, 21%)",
      shadow: "hsl(290, 70%, 36%)",
    },
  },
  text: {
    "numbers": "hsl(52, 100%, 62%)",
    "screen": "hsl(52, 100%, 62%)",
    "reset": "hsl(0, 0%, 100%)",
    "del": "hsl(0, 0%, 100%)",
    "=": "hsl(198, 20%, 13%)",
  },
};

const themes = { dark, light, weird };
export default themes;
