import assert from 'node:assert/strict';
import { createClientConfig, createMemoryAdapter, defineSchema, field } from '@x12i/client-config';

const schema = defineSchema({
  apiUrl: field.string({ default: 'https://api.example.com', required: true }),
  debug: field.boolean({ default: false }),
});
const storage = createMemoryAdapter();
const store = createClientConfig({ namespace: 'example.app', schema, storage });
await store.load();
store.setField('debug', true);
await store.save();
const reloaded = createClientConfig({ namespace: 'example.app', schema, storage });
await reloaded.load();
assert.equal(reloaded.get().debug, true);
console.log(reloaded.get());
