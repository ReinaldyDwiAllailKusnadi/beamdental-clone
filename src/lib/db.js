import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');

export function getCollection(name) {
  const filePath = path.join(dataDir, `${name}.json`);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    return JSON.parse(content);
  } catch (e) {
    return [];
  }
}

export function saveCollection(name, data) {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  const filePath = path.join(dataDir, `${name}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  return data;
}

export function getItemById(name, id) {
  const list = getCollection(name);
  return list.find(item => String(item.id) === String(id));
}

export function createItem(name, item) {
  const list = getCollection(name);
  const newItem = {
    ...item,
    id: item.id || `${name.slice(0, 3)}-${Date.now()}`
  };
  list.unshift(newItem);
  saveCollection(name, list);
  return newItem;
}

export function updateItem(name, id, updates) {
  const list = getCollection(name);
  const index = list.findIndex(item => String(item.id) === String(id));
  if (index === -1) return null;
  list[index] = { ...list[index], ...updates };
  saveCollection(name, list);
  return list[index];
}

export function deleteItem(name, id) {
  const list = getCollection(name);
  const filtered = list.filter(item => String(item.id) !== String(id));
  if (filtered.length === list.length) return false;
  saveCollection(name, filtered);
  return true;
}
