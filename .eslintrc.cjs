module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // var 금지
    'no-var': 'warn',
    // 일치 연산자 사용 필수
    eqeqeq: 'warn',
    // 컴포넌트의 props 검사 비활성화, propstype 사용하지 않아도 경고 띄우지 않음
    'react/prop-types': 0,
    // 불필요한 세미콜론 사용 시 에러 표시
    'no-extra-semi': 'error',
    // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'arrow-parens': ['warn', 'as-needed'],
    // 사용하지 않는 변수가 있을 때 발생하는 경고 비활성화
    'no-unused-vars': ['off'],
    // 콘솔 사용 시 발생하는 경고 비활성화
    'no-console': ['off'],
    // export문이 하나일 때 default export 사용 권장 경고 비활성화
    'import/prefer-default-export': ['off'],
    // react hooks의 의존성배열이 충분하지 않을 때 경고 표시
    'react-hooks/exhaustive-deps': ['warn'],
    // 컴포넌트 이름은 PascalCase로
    'react/jsx-pascal-case': 'warn',
    // 반복문으로 생성하는 요소에 key 강제
    'react/jsx-key': 'warn',
    // 디버그 허용
    'no-debugger': 'off',
    // [error] Delete `␍` prettier/prettier
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // [error] Function component is not a function declaration
    'react/function-component-definition': [2, { namedComponents: ['arrow-function', 'function-declaration'] }],
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    // [error] Curly braces are unnecessary here
    'react/jsx-curly-brace-presence': ['warn', { props: 'always', children: 'always' }],
    // 파일의 경로가 틀렸는지 확인하는 옵션 false
    'import/no-unresolved': ['error', { caseSensitive: false }],
    // props spreading 허용하지 않는 경고 표시
    'react/jsx-props-no-spreading': [1, { custom: 'ignore' }],
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    // 테스트 또는 개발환경을 구성 파일에서는 devDependency 사용 허용
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
