
export const classification = {
  grapes: [
    'Baco Noir',
    'Barbera',
    'Cabernet Franc',
    'Cabernet Sauvignon',
    'Catawba',
    'Cayuga White',
    'Chambourcin',
    'Chancellor',
    'Chardonel',
    'Chardonnay',
    'Chelois',
    'Chenin Blanc',
    'Concord',
    'Delaware',
    'Frontenac',
    'Gewürztraminer',
    'Malbec',
    'Maréchal Fochr',
    'Merlot',
    'Norton',
    'Pinot Blanc',
    'Pinot Gris',
    'Pinot Noir',
    'Riesling',
    'Sangiovese',
    'Sauvignon Blanc',
    'Seyval Blanc',
    'Syrah',
    'Sémillon',
    'Traminette',
    'Vidal Blanc',
    'Vignoles',
    'Zinfandel',
  ],
};

/**
 * Schema: name, year, grape, rating, comments
 */
export const schema = {
  name: {
    label: 'Name',
    show: true,
    samples: ['$2 Chuck', 'Chateau React', 'Vint.js'],
    align: 'left',
  },
  year: {
    label: 'Year',
    type: 'year',
    show: true,
    samples: [2015, 2013, 2021],
  },
  grape: {
    label: 'Grape',
    type: 'suggest',
    options: classification.grapes,
    show: true,
    samples: ['Merlot', 'Bordeaux Blend', 'Zinfandel'],
    align: 'left',
  },
  rating: {
    label: 'Rating',
    type: 'rating',
    show: true,
    samples: [3, 1, 5],
  },
  comments: {
    label: 'Comments',
    type: 'textarea',
    samples: ['Nice for the price', 'XML in my JS, orly??!', 'Lodi? Again!'],
  },
};
