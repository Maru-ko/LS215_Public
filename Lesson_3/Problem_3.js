const BLOCKS = ['BO', 'XK','DQ', 'CP','NA', 'GT','RE', 'FS','JW', 'HU','VI', 'LY', 'ZM'];

function isBlockWord(str) {
  if (str.match(/[^a-z]/gi)) return false;
  str = str.toUpperCase();
  let container = '';const BLOCKS = ['BO', 'XK','DQ', 'CP','NA', 'GT','RE', 'FS','JW', 'HU','VI', 'LY', 'ZM'];

function isBlockWord(str) {
  if (str.match(/[^a-z]/gi)) return false;
  str = str.toUpperCase();
  let container = '';
  
  for (let idx in str) {
   if (container.includes(str[idx])) return false;
   BLOCKS.forEach(block => (block.includes(str[idx]) ? container += block : '' ));
  }
  return true;
}const BLOCKS = ['BO', 'XK','DQ', 'CP','NA', 'GT','RE', 'FS','JW', 'HU','VI', 'LY', 'ZM'];

function isBlockWord(str) {
  if (str.match(/[^a-z]/gi)) return false;
  str = str.toUpperCase();
  let container = '';
  
  for (let idx in str) {
   if (container.includes(str[idx])) return false;
   BLOCKS.forEach(block => (block.includes(str[idx]) ? container += block : '' ));
  }
  return true;
}
  for (let idx in str) {
   if (container.includes(str[idx])) return false;
   BLOCKS.forEach(block => (block.includes(str[idx]) ? container += block : '' ));
  }

  return true;
}