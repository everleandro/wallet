export default function () {
  const _required = (val: any) => {
    const valid = Array.isArray(val) ? val.length !== 0 : !!val || val === 0;
    return valid || "This field is required";
  };
  const _more_than_0 = (val: any) => {
    return parseInt(val) > 0 || "value greater than 0 required";
  };

  const _email = (value: string) => {
    return (
      /^[^@]+@[^@.]+(.[^@]+)*\.[a-zA-Z]{2,}$/.test(value) ||
      "The email must be valid"
    );
  };

  return { _required, _email, _more_than_0 };
}
