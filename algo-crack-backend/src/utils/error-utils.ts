import { HttpException, HttpStatus, Logger } from '@nestjs/common';

interface AxiosError extends Error {
  response?: {
    data: {
      message: string;
    };
    status: number;
  };
}

export function handleAxiosError(error: unknown): never {
  const logger = new Logger();
  logger.error(
    'error stack:',
    error instanceof Error ? error.stack : undefined,
  );

  if (
    typeof error === 'object' &&
    error !== null &&
    'response' in error &&
    (error as AxiosError).response
  ) {
    // 當有 Axios response 時，丟出跟 response 相同的錯誤
    const axiosError = error as AxiosError;
    throw new HttpException(
      axiosError.response!.data.message,
      axiosError.response!.status,
    );
  } else {
    // 當沒有 Axios response 時，表示上游服務不可用
    throw new HttpException(
      'Upstream service unavailable',
      HttpStatus.SERVICE_UNAVAILABLE,
    );
  }
}
