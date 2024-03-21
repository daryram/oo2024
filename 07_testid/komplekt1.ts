import {kasPositiivne, keskmineKiirus, keskmineKiirusMassiivist} from "../f1";


test('test 1', () => {
  expect(3+2).toBe(5);
});


test('test 2', () => {
  //expect(3+2).toBe(6);
});


test("positiivsus", ()=>{
    expect(kasPositiivne(3)).toBe(true);
    expect(kasPositiivne(0)).toBe(false);
    expect(kasPositiivne(-5)).toBe(false);
});

test('kiirus', ()=>{
  expect(keskmineKiirus(30, 60)).toBe(40);
});

test('kiirus2', ()=>{
  expect(keskmineKiirus(30, 30)).toBe(30);
});

test('kiirus3', ()=>{
  expect(keskmineKiirus(20, 60)).toBeCloseTo(30, 2);
});
//pane funktsioon vastavalt testile ja võimalusele õigele arvutuskäigule tööle
//sisendiks kiirus kahe 1km pikkuse teelõigu juures
//väljundiks 2kmse teekonna keskmine kiirus


test('kiirused4', () => {
  expect(keskmineKiirusMassiivist([40, 30, 60])).toBeCloseTo(40, 2);
});