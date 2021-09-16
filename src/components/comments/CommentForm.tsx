import React, { useState } from "react";
import TextInput from "../common/TextInput";
import { Comment } from "../../models/comment/interface";

interface CommentFormProps {
    saving: boolean;
    onSave: (name: string, email: string, body: string) => void;
}

function CommentForm(props: CommentFormProps): JSX.Element {
    const { saving = false, onSave } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const [errors, setErrors] = useState<any>({});

    const formIsValid = () => {
        const errors: any = {};

        if (!name) errors.name = "Name is required.";
        if (!email) errors.email = "Email is required";
        if (!body) errors.body = "Body is required";

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    };

    const cleanForm = () => {
        setName("");
        setEmail("");
        setBody("");
    };

    const saveComment = (event: any) => {
        event.preventDefault();
        console.log(name);
        if (formIsValid()) {
            onSave(name, email, body);
            cleanForm();
        }
    };

    return (
        <form onSubmit={saveComment}>
            <h2>Add a comment</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
            />

            <TextInput
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
            />

            <TextInput
                name="body"
                label="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                error={errors.body}
            />

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
}

export default CommentForm;
