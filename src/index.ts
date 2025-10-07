export function bootstrap(): void {
  console.log('ORM domain project bootstrapped successfully.');
}

declare const require: any;

if (typeof require !== 'undefined' && require.main === module) {
  bootstrap();
}
