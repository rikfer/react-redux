/* eslint-disable no-undef */
import React from "react";
import CommentForm from "./CommentForm";
import renderer from "react-test-renderer";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CommentForm
      errors={{}}
      onSave={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <CommentForm
      errors={{}}
      onSave={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
