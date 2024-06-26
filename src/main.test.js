import { screen } from "@testing-library/dom";

// refactor with useful tests

describe("base test placeholder", () => {
  test("test", () => {
    document.body.innerHTML = `
        <div class="wrapper">
            <span>test</span>
        </div>
    `;
    expect(document.body.innerHTML.toString()).toMatchInlineSnapshot(`
      "
              <div class=\"wrapper\">
                  <span>test</span>
              </div>
          "
    `);
  });
});
