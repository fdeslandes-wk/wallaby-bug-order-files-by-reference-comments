/// <reference path="a.ts" />

namespace test {
  describe('A', () => {
    it('should be constructed correctly', () => {
      const a = new A();
      expect(a.a).to.equal(5);
    });
  });
}
