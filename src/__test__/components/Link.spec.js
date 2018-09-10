import React from "react";
import Link from "../../components/Link";
import renderer from "react-test-renderer";

it("reders correctly", () => {
  const tree = renderer.create(<Link>Facebook</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("rederers correctly inline snapshots", () => {
  const tree = renderer.create(<Link>Inline</Link>).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<a
  className="normal"
  href="#"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Inline
</a>
`);
});
